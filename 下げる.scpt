FasdUAS 1.101.10   ��   ��    k             i         I      �� 	���� 0 
round_down   	  
�� 
 o      ���� 0 this_number  ��  ��    Z       ��   =         o     ���� 0 this_number    _        o    ���� 0 this_number    m    ����   L       c        o    	���� 0 this_number    m   	 
��
�� 
long��    L       \        _        o    ���� 0 this_number    m    ����   m    ����       l     ��������  ��  ��        l     ��������  ��  ��        i       !   I      �� "���� 0 thesplit theSplit "  # $ # o      ���� 0 	thestring 	theString $  %�� % o      ���� 0 thedelimiter theDelimiter��  ��   ! k      & &  ' ( ' l     �� ) *��   ) . ( save delimiters to restore old settings    * � + + P   s a v e   d e l i m i t e r s   t o   r e s t o r e   o l d   s e t t i n g s (  , - , r      . / . n     0 1 0 1    ��
�� 
txdl 1 1     ��
�� 
ascr / o      ���� 0 olddelimiters oldDelimiters -  2 3 2 l   �� 4 5��   4 - ' set delimiters to delimiter to be used    5 � 6 6 N   s e t   d e l i m i t e r s   t o   d e l i m i t e r   t o   b e   u s e d 3  7 8 7 r     9 : 9 o    ���� 0 thedelimiter theDelimiter : n      ; < ; 1    
��
�� 
txdl < 1    ��
�� 
ascr 8  = > = l   �� ? @��   ?   create the array    @ � A A "   c r e a t e   t h e   a r r a y >  B C B r     D E D n     F G F 2    ��
�� 
citm G o    ���� 0 	thestring 	theString E o      ���� 0 thearray theArray C  H I H l   �� J K��   J   restore the old setting    K � L L 0   r e s t o r e   t h e   o l d   s e t t i n g I  M N M r     O P O o    ���� 0 olddelimiters oldDelimiters P n      Q R Q 1    ��
�� 
txdl R 1    ��
�� 
ascr N  S T S l   �� U V��   U   return the result    V � W W $   r e t u r n   t h e   r e s u l t T  X�� X L     Y Y o    ���� 0 thearray theArray��     Z [ Z l     ��������  ��  ��   [  \�� \ l    � ]���� ] O     � ^ _ ^ O    � ` a ` k    � b b  c d c l   �� e f��   e   Set variables    f � g g    S e t   v a r i a b l e s d  h i h r     j k j n     l m l 2   ��
�� 
OTst m 1    ��
�� 
FCcn k o      ���� 0 myselection mySelection i  n o n r     p q p n     r s r 1    ��
�� 
valL s n     t u t 4    �� v
�� 
cobj v m    ����  u o    ���� 0 myselection mySelection q o      ���� 0 mytask myTask o  w x w r    " y z y e      { { n      | } | m    ��
�� 
FCRr } o    ���� 0 mytask myTask z o      ���� 0 therepetition theRepetition x  ~  ~ r   # ( � � � n   # & � � � 1   $ &��
�� 
FCRs � o   # $���� 0 therepetition theRepetition � o      ���� 0 therecurence theRecurence   � � � l  ) )�� � ���   � / ) theRecurence = FREQ=MINUTELY;INTERVAL=30    � � � � R   t h e R e c u r e n c e   =   F R E Q = M I N U T E L Y ; I N T E R V A L = 3 0 �  � � � r   ) 2 � � � n  ) 0 � � � I   * 0�� ����� 0 thesplit theSplit �  � � � o   * +���� 0 therecurence theRecurence �  ��� � m   + , � � � � �  =��  ��   �  f   ) * � o      ���� 0 myarray myArray �  � � � r   3 D � � � n   3 @ � � � 4   = @�� �
�� 
cobj � m   > ?����  � n  3 = � � � I   4 =�� ����� 0 thesplit theSplit �  � � � n   4 8 � � � 4   5 8�� �
�� 
cobj � m   6 7����  � o   4 5���� 0 myarray myArray �  ��� � m   8 9 � � � � �  ;��  ��   �  f   3 4 � o      ���� 0 frequencyunit frequencyUnit �  � � � Z   E c � ��� � � ?   E L � � � l  E J ����� � n   E J � � � 1   F J��
�� 
leng � o   E F���� 0 myarray myArray��  ��   � m   J K����  � r   O [ � � � c   O W � � � n   O S � � � 4   P S�� �
�� 
cobj � m   Q R����  � o   O P���� 0 myarray myArray � m   S V��
�� 
long � o      ���� 0 thefrequency theFrequency��   � r   ^ c � � � m   ^ _����  � o      ���� 0 thefrequency theFrequency �  � � � l  d d��������  ��  ��   �  � � � r   d t � � � n  d p � � � I   e p�� ����� 0 
round_down   �  ��� � ]   e l � � � o   e h���� 0 thefrequency theFrequency � m   h k � � ?���������  ��   �  f   d e � o      ���� "0 thenewfrequency theNewFrequency �  � � � l  u u��������  ��  ��   �  � � � r   u � � � � b   u | � � � m   u x � � � � � * F R E Q = H O U R L Y ; I N T E R V A L = � o   x {���� "0 thenewfrequency theNewFrequency � n      � � � 1   } ��
�� 
FCRs � o   | }���� 0 therepetition theRepetition �  � � � l  � ���������  ��  ��   �  � � � r   � � � � � o   � ����� 0 therepetition theRepetition � n      � � � m   � ���
�� 
FCRr � o   � ����� 0 mytask myTask �  ��� � I  � ��� ���
�� .OFOCFCMcnull���     obj  � o   � ����� 0 mytask myTask��  ��   a 4   �� �
�� 
cwin � m    ����  _ m      � ��                                                                                  OFOC  alis    .  Macintosh HD                   BD ����OmniFocus.app                                                  ����            ����  
 cu             Applications  /:Applications:OmniFocus.app/     O m n i F o c u s . a p p    M a c i n t o s h   H D  Applications/OmniFocus.app  / ��  ��  ��  ��       �� � � � � � � � � � ���������   � ������������~�}�|�{�z�y�� 0 
round_down  �� 0 thesplit theSplit
�� .aevtoappnull  �   � ****�� 0 myselection mySelection�� 0 mytask myTask� 0 therepetition theRepetition�~ 0 therecurence theRecurence�} 0 myarray myArray�| 0 frequencyunit frequencyUnit�{ 0 thefrequency theFrequency�z "0 thenewfrequency theNewFrequency�y   � �x �w�v � ��u�x 0 
round_down  �w �t ��t  �  �s�s 0 this_number  �v   � �r�r 0 this_number   � �q
�q 
long�u ��k"  	��&Y �k"k � �p !�o�n � ��m�p 0 thesplit theSplit�o �l ��l  �  �k�j�k 0 	thestring 	theString�j 0 thedelimiter theDelimiter�n   � �i�h�g�f�i 0 	thestring 	theString�h 0 thedelimiter theDelimiter�g 0 olddelimiters oldDelimiters�f 0 thearray theArray � �e�d�c
�e 
ascr
�d 
txdl
�c 
citm�m ��,E�O���,FO��-E�O���,FO� � �b ��a�` � ��_
�b .aevtoappnull  �   � **** � k     � � �  \�^�^  �a  �`   �   �  ��]�\�[�Z�Y�X�W�V�U�T�S ��R�Q ��P�O�N�M ��L�K ��J
�] 
cwin
�\ 
FCcn
�[ 
OTst�Z 0 myselection mySelection
�Y 
cobj
�X 
valL�W 0 mytask myTask
�V 
FCRr�U 0 therepetition theRepetition
�T 
FCRs�S 0 therecurence theRecurence�R 0 thesplit theSplit�Q 0 myarray myArray�P 0 frequencyunit frequencyUnit
�O 
leng
�N 
long�M 0 thefrequency theFrequency�L 0 
round_down  �K "0 thenewfrequency theNewFrequency
�J .OFOCFCMcnull���     obj �_ �� �*�k/ �*�,�-E�O��k/�,E�O��,EE�O��,E�O)��l+ E�O)��l/�l+ �k/E` O�a ,l ��m/a &E` Y kE` O)_ a  k+ E` Oa _ %��,FO���,FO�j UU � �I ��I  �   � �  � �  ��H�G �  ��F�E �  ��D �  ��C�B�A �  ��@
�@ 
FCDo
�C 
FCdw�B)?
�A kfrmID  
�D 
FCcn
�F 
OTtr�E 
�H 
OTtr�G  �  � �  ��? ��> �  ��=
�= 
FCDo
�? 
FCac � � � �  a u j m S e _ A 9 Y S
�> kfrmID   � �< � �
�< 
FCRs � �   , F R E Q = H O U R L Y ; I N T E R V A L = 3 � �;�:�9
�; 
FRmM
�: ****FRmS�9   � � , F R E Q = H O U R L Y ; I N T E R V A L = 5 � �8�8   �7�6�5�4�3�2�1�0�/�.�-�,�+ �  F R E Q �  H O U R L Y ; I N T E R V A L �  5�7  �6  �5  �4  �3  �2  �1  �0  �/  �.  �-  �,  �+   � �		  H O U R L Y�� �� ��  ascr  ��ޭ