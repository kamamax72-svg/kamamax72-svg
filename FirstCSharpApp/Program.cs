Console.Clear();
Console.WriteLine("Hello, World!");
strLine("-",30);
Console.WriteLine("โปรแกรมแนะนำตัวเอง");
Console.WriteLine("โปรดกรอกชื่อของคุณ: ");
string Name = Console.ReadLine();
strLine("-",30);
Console.WriteLine("สวัสดีครับคุณ " + Name + "|");
strLine("-",30);
Console.WriteLine("ขอบคุณที่ใช้โปรแกรมของฉัน");


void strLine(string strInput, int n)
{
    string strOutput = "";
    for (int i = 0; i < n; i++)
    {
        strOutput += strInput;
    }
    Console.WriteLine(strOutput + "\n");
}